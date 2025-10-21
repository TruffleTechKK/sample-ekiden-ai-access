# Ekiden AI Data Access Sample

This guide will walk you through setting up and running the sample application to explore EKIDEN.ai's Activity data system.

## Prerequisites

### Environment Requirements

To get started, you'll need:

- **Operating System**: Linux, UNIX, or WSL
- **Node.js**: Version 20
- **Package Manager**: yarn

### Permissions Setup

#### File System Access

Ensure your user has write permissions to `/tmp/` directory. This is where FIT files will be downloaded temporarily. You can modify this destination in the code if needed.

#### Firebase Configuration

To access Firebase Firestore and Firebase Storage, you'll need a service account key file. Place the `student.json` file in the project root directory. This configuration path is customizable in the code.

**DO NOT COMMIT THE `student.json` file**

## Getting Started

### Install Dependencies

First, install all required project dependencies:

```bash
yarn install
```

### Run the Sample Application

Launch the sample script with:

```bash
yarn start
```

## Database Information

### Access Details

You'll be working with:

- **Environment**: A clone of our `development` database.
- **Permissions**: Firestore READ/WRITE and Storage READ access via your service account.
- **Data Coverage**: All data up to October 20, 2025
- **Active Test Users**: There're 2 users with regular activity uploads. The 2 users email will be provided.

### Database Schema

For detailed information about the database structure and entity relationships, please refer to `entity-graph.md`. This file requires `mermaid` to generate the entity graph.
