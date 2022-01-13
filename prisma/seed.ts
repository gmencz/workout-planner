import { PrismaClient, WeekDay } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await db.workout.create({
    data: {
      name: "Workout 1",
      days: {
        create: [
          {
            weekDay: WeekDay.MONDAY,
            exercises: {
              create: [
                {
                  exercise: "Push-ups. 6 normal and 4 knee push-ups.",
                  reps: 10,
                  sets: 3,
                },
                {
                  exercise: "Pull-ups. 50kg resistance.",
                  reps: 10,
                  sets: 3,
                },
              ],
            },
          },
          {
            weekDay: WeekDay.TUESDAY,
            exercises: {
              create: [
                {
                  exercise: "Roman twists",
                  reps: 20,
                  sets: 3,
                },
                {
                  exercise: "Lunges. No weight.",
                  reps: 10,
                  sets: 3,
                },
              ],
            },
          },
        ],
      },
    },
  });
}

seed();
