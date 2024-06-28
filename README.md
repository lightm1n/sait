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

# Setup environment
1. **Install ESLint as a dev dependency**
    ```bash
    npm install --save-dev eslint@8.57.0 @eslint/create-config@1.0.0
    ```

2. **Initialize ESLint configuration**
    ```bash
    npx eslint --init
    ```
    *Note: You can also run this command directly using `npm init @eslint/config`.*

    Follow the prompts:
    - How would you like to use ESLint? **style**
    - What type of modules does your project use? **esm**
    - Which framework does your project use? **react**
    - Does your project use TypeScript? **no**
    - Where does your code run? **browser**
    - Which style guide do you want to follow? **airbnb**

3. **Install the required dependencies**
    After selecting the Airbnb style guide, ESLint will prompt you to install the required dependencies. Choose **Yes** to install them and select **npm** as your package manager.

4. **Replace the default configuration file with .eslintrc.yml**
    - Delete the existing configuration file created by ESLint.
    - Create a new file named `.eslintrc.yml` in the root of your project.

5. **Configure your `.eslintrc.yml` file similarly to your course project configuration.**


# Add Code Climate Badge to your repository
1. **Navigate to your project on Code Climate**
    - Go to [Code Climate](https://codeclimate.com/login) and log in to your account.
    - Select your project from the dashboard.

2. **Find the badge embed code**
    - On your project page, click on the "Settings" tab.
    - In the sidebar, find and click on the "Badges" section.
    - Copy the Markdown code snippet for the maintainability badge.

3. **Edit your README.md file**
    - Open your project folder and find the `README.md` file.
    - Open the `README.md` file in a text editor.

4. **Add the badge to your README.md**
    - Clear `README.md` file.
    - Paste the Markdown code snippet copied from Code Climate at the top of your `README.md` file.


# README Formatting
1. **Add a header with the following text**
    ```markdown
    # Экзаменационная работа по дисциплине МДК 05.02 "Разработка кода информационных систем"
    ```

2. **Add a subheading**
    ```markdown
    ## Работу выполнил: <фамилия имя>
    ```

3. **Add the text**
    ```markdown
    Группа: <номер группы>
    ```

4. **Add the text**
    ```markdown
    Номер билета: <номер билета>
    ```

Example of the final `README.md` file:
```markdown
# Экзаменационная работа по дисциплине МДК 05.02 "Разработка кода информационных систем"

## Работу выполнил: Иванов Иван

Группа: 22x

Номер билета: 12345
```

# Specifying the Color Palette
According to the subject area of the ticket, select a color palette using any service.

1. **Add a "docs" folder to the repository**
   - Create a folder named "docs" in your project directory.

2. **Save the palette layout in this folder**

3. **Include in the README.md as follows:**
```markdown
### Цветовая схема экзаменационной работы

![Цветовая схема](docs/имя_файла_палитры.png)
```
Replace `имя_файла_палитры.png` with the actual filename of the color palette layout image saved in the "docs" folder.

