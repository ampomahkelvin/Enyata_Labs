
# GitHub Search Project

This is a React-based web application that allows users to search for GitHub repositories, users, and organizations using the GitHub API. It is built using React, TypeScript, and styled with Tailwind CSS.

## Features

- Search for GitHub repositories by name or description.
- Search for GitHub users by username.
- Search for GitHub organizations.
- Display repository, user, and organization information.
- Fully responsive design with Tailwind CSS.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Adds static types to JavaScript for better development experience.
- **Tailwind CSS** - Utility-first CSS framework for styling the components.
- **GitHub API** - Used to fetch data about repositories, users, and organizations.

## Installation

Follow these steps to get the project running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-search-project.git
cd github-search-project
```

### 2. Install dependencies

Make sure you have Node.js and npm/yarn installed, then run:

```bash
npm install
# or
yarn install
```

### 3. Set up GitHub API Token (optional)

To avoid rate limits while making requests to the GitHub API, it's recommended to use a personal access token. You can skip this step for basic usage, but if you want to increase your rate limit:

- Go to GitHub [Personal Access Tokens](https://github.com/settings/tokens) and generate a new token.
- Add it to your environment variables as `REACT_APP_GITHUB_TOKEN`.

### 4. Start the development server

```bash
npm start
# or
yarn start
```

This will start the React development server and open the app in your default web browser.

## Usage

- **Search Bar:** Enter the name of a GitHub repository, user, or organization.
- **Results Display:** Results will be displayed with the relevant information such as name, description, and more.
- **Pagination:** If the results exceed the limit, you can paginate to view more results.

## Project Structure

```
github-search-project/
├── public/
│   └── index.html        # Main HTML template
├── src/
│   ├── components/       # React components
│   ├── types/            # Typescript types
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Entry point for React
│   ├── tailwind.config.js# Tailwind CSS configuration
│   └── ...
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## Tailwind CSS Customization

Tailwind CSS is used for styling, and you can customize it further by editing the `tailwind.config.js` file. This allows you to adjust colors, spacing, and other utilities according to your project's needs.

## GitHub API Rate Limits

- GitHub API has a rate limit of 60 requests per hour for unauthenticated requests.
- You can authenticate requests using a personal access token to increase the limit to 5,000 requests per hour.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
