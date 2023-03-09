import fs from 'fs'
import path from 'path'
export const recurseDir = (dir: string, includeDirectories = false, includeSymlinks = false, maxDepth: number = -1): Promise<string[]> => new Promise((resolve, reject) => {
  if (!dir) reject('Falsey Directory Specified')
  if (maxDepth === 0) return resolve([])
  fs.readdir(dir, async (err, files) => {
    if (err)
      reject(err)
    else {
      const resultingFiles: string[] = [];
      for (const file of files.map(file => path.join(dir, file))) {
        const stat: fs.Stats = await new Promise((resolve, reject) => fs.stat(file, (err, stat) => err ? reject(err) : resolve(stat)))
        let shouldContinue = true;
        if (stat.isSymbolicLink())
          shouldContinue = shouldContinue && includeDirectories
        if (stat.isDirectory()) {
          if (includeDirectories)
            resultingFiles.push(file);
          (await recurseDir(file, includeDirectories, includeSymlinks, maxDepth - 1)).forEach(item => resultingFiles.push(item));
        } else resultingFiles.push(file)
      }
      resolve(resultingFiles);
    }
  })
})
export default recurseDir
