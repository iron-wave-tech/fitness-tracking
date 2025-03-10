# Fitness Tracker App

A modern web application for tracking your workout routine. Built with Next.js, TypeScript, and Tailwind CSS.

## How to Update Your Training Plan

### 1. Locate the Training Plan File
The training plan is stored in `src/app/page.tsx`. Look for the `workoutProgram` constant near the top of the file.

### 2. Data Structure
Your training plan should follow this structure:
```typescript
const workoutProgram = {
  1: [  // Day 1
    {
      name: "Exercise Name",
      setsReps: "3 sets of 12 reps",  // Format as shown in your Excel
      recovery: "60 seconds",          // Recovery time between sets
      group: "Shoulders"              // Exercise group (e.g., Shoulders, Chest, etc.)
    },
    // Add more exercises for Day 1
  ],
  2: [  // Day 2
    // Day 2 exercises
  ],
  // Continue for all workout days (up to 6)
};
```

### 3. Converting from Excel
To convert your Excel workout plan:

1. For each day (1-6):
   - Create a new array inside the `workoutProgram` object
   - Each exercise needs these fields:
     - `name`: Exercise name from Excel
     - `setsReps`: Sets and repetitions combined
     - `recovery`: Recovery time
     - `group`: Exercise group/category

### 4. Example Format
Here's how to format different types of exercises:

```typescript
// Single exercise example
{
  name: "Military Press",
  setsReps: "3 sets of 12 reps",
  recovery: "60 seconds",
  group: "Shoulders"
}

// Super-set example
{
  name: "Bench Press",
  setsReps: "4 sets of 10 reps",
  recovery: "90 seconds",
  group: "Chest"
}
```

### 5. Steps to Update

1. Open `src/app/page.tsx`
2. Find the `workoutProgram` constant
3. Replace the example data with your workout plan
4. Save the file
5. The app will automatically update with your new training plan

### 6. Data Validation
Make sure:
- All exercise entries have the required fields
- Days are numbered from 1 to 6
- Recovery times are formatted as "X seconds" or "X minutes"
- Exercise groups are consistent throughout

## Running the App

```bash
npm run dev
```

Visit `http://localhost:3000` to view your workout plan.

## Tips
- Keep the formatting consistent
- Double-check the data structure
- Make sure all fields are strings
- Include recovery times for proper rest periods
- Group similar exercises together under the same exercise group

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
