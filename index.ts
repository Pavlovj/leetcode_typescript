import * as fs from "fs";
import * as path from "path";

/**
 *  Creates a folder and two files inside it, one for the solution and one for the tests.
 * @param problemName  The name of the problem (e.g., "345. Reverse Vowels of a String")
 * @param folderDirectory  The directory where the new folder will be created (e.g., "./src/string")
 * @param difficulty  The difficulty level of the problem (e.g., "easy", "medium", "hard") - default: "unknown"
 */
async function createFolderAndFiles(
  problemName: string,
  folderDirectory: string,
  difficulty: string
): Promise<void> {
  // Extract the problem number from the problem name (e.g., "345" from "345. Reverse Vowels of a String")
  const problemNumber = problemName.split(".")[0];

  // Remove non-alphanumeric characters from the problem name and create the folder name
  const normalizedProblemName = problemName.replace(/[^\w\s]/gi, "");
  const folderName = `[${difficulty.toUpperCase()}] ${normalizedProblemName}`;

  // Check if the folder name is provided as a CL argument
  if (!folderName) {
    console.error("Please provide a folder name as a command-line argument.");
    process.exit(1);
  }

  const projectRoot = __dirname;
  const targetFolderDirectory = path.resolve(projectRoot, folderDirectory);

  // Check if the target folder directory exists and is a directory
  if (
    fs.existsSync(targetFolderDirectory) &&
    fs.lstatSync(targetFolderDirectory).isDirectory()
  ) {
    const folderPath = path.join(targetFolderDirectory, folderName);

    // Exit if the folder already exists
    if (fs.existsSync(folderPath)) {
      console.error(`Folder "${folderName}" already exists.`);
      process.exit(1);
    }

    try {
      // Create the folder
      await fs.promises.mkdir(folderPath);

      // Generate the problem URL and add it as a comment at the beginning of each file
      const problemUrl = `https://leetcode.com/problems/${normalizedProblemName
        .toLowerCase()
        .replace(/\s/g, "-")}/`;
      const commentProblemUrl = `// ${problemUrl}\n\n`;

      // Create the .ts and .test.js files inside the folder and add the problem URL comments
      await fs.promises.writeFile(
        path.join(folderPath, `${problemNumber}.ts`),
        commentProblemUrl
      );
      await fs.promises.writeFile(
        path.join(folderPath, `${problemNumber}.test.js`),
        commentProblemUrl
      );

      console.log(
        `Folder "${folderName}" and files "${problemNumber}.ts" and "${problemNumber}.test.js" created successfully.`
      );
    } catch (error) {
      console.error("Error occurred while creating folder and files:", error);
    }
  } else {
    console.error("The provided folder directory is not a valid directory.");
    process.exit(1);
  }
}

const args = process.argv.slice(2);
const problemName = args[0];
const folderDirectory = `./src/${args[1] + "/" || ""}`;
const difficulty = args[2] || "unknown";

createFolderAndFiles(problemName, folderDirectory, difficulty);
