# Installation
1. **Create a local project folder**
    ```bash
    npx create-react-app exam-surname-22x
    ```
    *Note: When creating the folder, use the format "exam-surname-22x", where 22x is your group number.*

2. **Navigate into the folder**
    ```bash
    cd exam-surname-22x
    ```

3. **Initialize a Git repository**
    ```bash
    git init
    ```

4. **Create a new repository on GitHub with the same name as your local folder**

5. **Copy the SSH link of the repository**

6. **In the terminal (make sure you are still in the project folder), run the following commands**
    ```bash
    git add .
    git commit -m "initial commit"
    git remote add origin <SSH link to your repository>
    ```

7. **Perform a test push**
    ```bash
    git push -u origin master
    ```
