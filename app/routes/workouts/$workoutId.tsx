import { PencilIcon } from "@heroicons/react/solid";
import type { WeekDay } from "@prisma/client";
import { json, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

type LoaderData = {
  workout: {
    id: string;
    name: string;
    days: {
      id: string;
      weekDay: WeekDay;
      exercises: {
        id: string;
        exercise: string;
        reps: number | null;
        sets: number | null;
      }[];
    }[];
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const workout = await db.workout.findUnique({
    where: {
      id: params.workoutId,
    },
    select: {
      id: true,
      name: true,
      days: {
        select: {
          id: true,
          weekDay: true,
          exercises: {
            select: {
              id: true,
              exercise: true,
              reps: true,
              sets: true,
            },
          },
        },
      },
    },
  });

  if (!workout) {
    throw new Response("Workout not found.", {
      status: 404,
    });
  }

  return json<LoaderData>({
    workout,
  });
};

function WorkoutDay({ day }: { day: LoaderData["workout"]["days"][number] }) {
  return (
    <li className="mb-8">
      <span className="font-medium">{day.weekDay}</span>

      <ol className="mt-2 list-disc pl-5 flex flex-col gap-4">
        {day.exercises.map((exercise) => (
          <li key={exercise.id}>
            <div className="flex gap-4 items-center">
              <div>
                <span>
                  {exercise.exercise} {""}
                </span>

                {exercise.reps != undefined || exercise.sets != undefined ? (
                  <span>(</span>
                ) : null}

                {exercise.reps != undefined ? (
                  <span>
                    {exercise.reps} reps, {""}
                  </span>
                ) : null}

                {exercise.sets != undefined ? (
                  <span>{exercise.sets} sets</span>
                ) : null}

                {exercise.reps != undefined || exercise.sets != undefined ? (
                  <span>)</span>
                ) : null}
              </div>

              <button
                type="button"
                className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PencilIcon
                  className="-ml-0.5 mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                Edit
              </button>
            </div>
          </li>
        ))}
      </ol>
    </li>
  );
}

export default function Workout() {
  const { workout } = useLoaderData<LoaderData>();

  return (
    <div className="p-6">
      <h1 className="text-xl text-gray-900 font-semibold mb-4">
        {workout.name}
      </h1>

      <ol>
        {workout.days.map((day) => (
          <WorkoutDay key={day.id} day={day} />
        ))}
      </ol>
    </div>
  );
}
