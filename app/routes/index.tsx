import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { ChevronRightIcon, PlusSmIcon } from "@heroicons/react/solid";
import { db } from "~/utils/db.server";

type LoaderData = {
  workouts: {
    id: string;
    name: string;
  }[];
};

export const loader: LoaderFunction = async () => {
  const workouts = await db.workout.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return json<LoaderData>({
    workouts,
  });
};

export default function Index() {
  const { workouts } = useLoaderData<LoaderData>();

  return (
    <div className="p-6">
      <h1 className="text-xl text-gray-900 font-semibold mb-4">
        Workout planner
      </h1>

      <Link
        to="/workouts/create"
        className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
      </Link>

      <ul className="mt-6">
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link
              prefetch="intent"
              className="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1"
              to={`./workouts/${workout.id}`}
            >
              <span>{workout.name}</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
