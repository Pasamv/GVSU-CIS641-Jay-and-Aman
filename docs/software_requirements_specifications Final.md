# Overview

This Software Requirements Specification (SRS) document outlines the functional and non-functional requirements for the recipe-sharing platform project. The document serves as a comprehensive guide for stakeholders, including developers, designers, and project managers, detailing the functionalities and performance criteria necessary to ensure the successful implementation of the system.

# Software Requirements

This section provides the functional and non-functional requirements in a structured format to define the platform's expectations clearly.

## Functional Requirements

### User Authentication

| ID  | Requirement |
| :-------------: | :----------: |
| FR1 | Users should be able to log in and register an account by providing a valid email address. |
| FR2 | Users should be logged in directly once after registration. |
| FR3 | Users should remain logged in when reopening the website unless they explicitly log out. |
| FR4 | User passwords should be masked during typing and encrypted in the database. |
| FR5 | Users should be able to log out properly through a dedicated logout option. |

### Recipe Management

| ID  | Requirement |
| :-------------: | :----------: |
| FR6 | Users should be able to post recipes only when logged in. |
| FR7 | Users should be able to enter recipe details, including recipe name, ingredients, and step-by-step instructions. |
| FR8 | Users should be able to search for specific recipes using a dynamic search bar. |
| FR9 | Users should be able to share recipe links directly with others. |
| FR10 | Recipes should be displayed in a sorted alphabetical order. |

### Reviews

| ID  | Requirement |
| :-------------: | :----------: |
| FR11 | Only registered users should be allowed to post reviews. |
| FR12 | All users should be able to view reviews posted by others. |
| FR13 | Registered users should be restricted to posting one review per recipe. |
| FR14 | Non-registered users should not be able to post reviews. |
| FR15 | Reviews should be displayed in sorted order, starting with the most recent. |

### User Interface and Experience

| ID  | Requirement |
| :-------------: | :----------: |
| FR16 | The system should have a responsive and intuitive user interface. |
| FR17 | Users should be able to quickly navigate between different sections (Post Recipe, Recipe Search, Recipe Details). |
| FR18 | The platform should provide consistent design elements across all pages. |
| FR19 | The design should prioritize readability and simplicity. |
| FR20 | The website should feature interactive elements, such as buttons and links, with hover effects for better visibility. |

### Community Engagement

| ID  | Requirement |
| :-------------: | :----------: |
| FR21 | The platform should foster an active community where users can post, search, and interact with recipes. |
| FR22 | Users should share their creations and engage with others' posts through comments. |
| FR23 | The platform should encourage the exploration of new recipes and cuisines. |
| FR24 | Reviewing and sharing features should promote consistent user interaction. |
| FR25 | The platform should facilitate collaboration and inspiration among users. |

## Non-Functional Requirements

### Performance

| ID  | Requirement |
| :-------------: | :----------: |
| NFR1 | The platform should respond to API requests within 2 seconds. |
| NFR2 | MongoDB queries should return results within 1 second for typical requests. |
| NFR3 | The system should maintain a 99.5% uptime for all core functionalities. |
| NFR4 | The platform should handle up to 500 active users at any time. |
| NFR5 | Recipe searches should display results within 3 seconds. |

### Scalability

| ID  | Requirement |
| :-------------: | :----------: |
| NFR6 | The system should allow for horizontal scaling to handle increased traffic. |
| NFR7 | MongoDB should support up to 50,000 recipe documents without performance issues. |
| NFR8 | The platform should scale its API endpoints to support future features like user groups or chat. |
| NFR9 | Deployment should support load balancing across multiple servers. |
| NFR10 | The system should handle region-specific configurations like time zones or date formats. |

### Security

| ID  | Requirement |
| :-------------: | :----------: |
| NFR11 | All RESTful API endpoints should require authentication using JWT tokens. |
| NFR12 | User data should be encrypted in MongoDB with appropriate security measures. |
| NFR13 | The platform should include validation to prevent SQL injection and XSS attacks. |
| NFR14 | React components should sanitize user inputs to avoid security vulnerabilities. |
| NFR15 | Login attempts should be limited to prevent brute-force attacks. |

### Usability

| ID  | Requirement |
| :-------------: | :----------: |
| NFR16 | The React-based user interface should work on all modern browsers (Chrome, Firefox, Safari, Edge). |
| NFR17 | The platform should support responsive design for mobile, tablet, and desktop devices. |
| NFR18 | The navigation between sections should be intuitive and fast. |
| NFR19 | Users should be provided with error messages when actions fail. |
| NFR20 | The platform should offer tooltips and help text for all complex fields. |

### Maintainability

| ID  | Requirement |
| :-------------: | :----------: |
| NFR21 | The platform should follow RESTful API standards for all endpoints. |
| NFR22 | The React front-end codebase should be modular and reusable. |
| NFR23 | MongoDB schema designs should allow easy addition of new fields or collections. |
| NFR24 | Detailed logs should be maintained for API calls and server errors. |
| NFR25 | The platform should support automated testing for all major features. |

# Change Management Plan

Implementing the recipe-sharing platform effectively requires a step-by-step approach to ensure it becomes a valuable tool within the customer's organization. This plan focuses on three key areas: training users, integrating the platform with existing systems, and resolving issues to maintain a smooth operation.

### Training
The first step is to make sure all users are comfortable with the platform and understand its features. This will be achieved through:
1. **Hands-On Training**: Conduct live sessions for users to learn how to log in, post recipes, search for recipes, and interact with reviews.
2. **Accessible Support Materials**: Provide easy-to-follow user manuals and short video tutorials to help users navigate the platform on their own.
3. **Continuous Updates to FAQs**: Develop a FAQ section addressing common questions. This will evolve over time as users provide feedback and as new features are added.

### Integration
To ensure the platform integrates seamlessly into the customer’s existing systems:
1. **Collaborate with IT Teams**: Work with the customer’s IT department to identify integration points, such as linking the platform with analytics or existing databases.
2. **Build Compatibility**: Ensure the platform supports widely used authentication methods like OAuth for ease of access.
3. **Test in a Safe Environment**: Deploy the platform in a sandbox environment to test how it interacts with the customer’s systems before going live.

### Issue Resolution
No platform is perfect at launch, so a strong plan to address issues is critical:
1. **Centralized Issue Tracking**: Set up a ticketing system where users can report problems or suggest improvements.
2. **Dedicated Support Team**: Have a team ready to handle user concerns quickly and effectively.
3. **Proactive Updates**: Schedule regular system updates to fix bugs, improve performance, and implement new features based on user feedback.
4. **Monitor and Respond**: Use automated tools to monitor the platform’s performance and identify issues before they affect users.

# Traceability Links

## Use Case Diagram Traceability

| Artifact ID  | Artifact Name         | Requirement ID         |
| :----------: | :-------------------: | :--------------------: |
| UC1     | Register     | FR1         |
| UC2     | Search Posts     | FR8    |
| UC3     | Share Posts         | FR9 |
| UC4     | Add Posts | FR6 |
| UC5     | Review Posts | FR11 |

## Class Diagram Traceability

| Artifact Name    | Requirement ID          |
| :--------------: | :---------------------: |
| User Class       | FR1-5      |
| Recipe Class     | FR6-10     |
| Review Class     | FR11-15        |
| UI Design Class  | FR20-25       |

## Activity Diagram Traceability

| Artifact ID      | Artifact Name          | Requirement ID          |
| :--------------: | :--------------------: | :---------------------: |
| Activity1        | Registration Workflow  | FR1       |
| Activity2        | Recipe Posting Workflow| FR6, FR7         |
| Activity3        | Review Posting Workflow| FR11, FR12 |

# Software Artifacts

This section provides links to all the artifacts developed for the project.

- [Database Diagrams](https://github.com/Pasamv/GVSU-CIS641-Jay-and-Aman/blob/main/docs/Database%20Diagrams.png)
- [Class Diagram](https://github.com/Pasamv/GVSU-CIS641-Jay-and-Aman/blob/main/docs/Class%20Diagrams.pdf)
- [Activity Diagram](https://github.com/Pasamv/GVSU-CIS641-Jay-and-Aman/blob/main/docs/Use%20Case%20Diagrams%20%26%20Activity%20Diagrams.pdf)
- [Sequence Diagram](https://github.com/Pasamv/GVSU-CIS641-Jay-and-Aman/blob/main/docs/Sequence%20Diagrams.pdf)


