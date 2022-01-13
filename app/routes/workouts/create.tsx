// type Exercise = {
//   exercise: string;
//   reps: number | null;
//   sets: number | null;
// };

import { ActionFunction } from "remix";

export const action: ActionFunction = () => {
  
}

export default function CreateWorkout() {
  // const [exerciseModal, setExerciseMdal] = useState<{
  //   open: boolean;
  //   weekDay: WeekDay | null;
  // }>({
  //   open: false,
  //   weekDay: null,
  // });

  // const exerciseNameInputRef = useRef(null);

  // const closeExerciseModal = () => {
  //   setExerciseMdal((prev) => ({
  //     ...prev,
  //     open: false,
  //   }));
  // };

  return (
    <div className="p-6">
      <h1 className="text-xl text-gray-900 font-semibold mb-4">
        Create workout
      </h1>

      <form action="#">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="My Awesome Workout"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </form>

      {/* <Transition.Root show={exerciseModal.open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={exerciseNameInputRef}
          onClose={closeExerciseModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <form onSubmit={() => {
                  setExercises(prev => ({
                    ...prev,
                    [exerciseModal.weekDay!]: [
                      ...prev[exerciseModal.weekDay!],
                      {
                        exercise: ,
                        reps: number | null,
                        sets: number | null,
                      }
                    ]
                  }))
                }} onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="week-day"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Week day
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="week-day"
                        id="week-day"
                        disabled
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={exerciseModal.weekDay!}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="exercise"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Exercise *
                    </label>
                    <div className="mt-1">
                      <input
                        ref={exerciseNameInputRef}
                        type="text"
                        name="exercise"
                        id="exercise"
                        required
                        placeholder="Push-ups"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="flex-1">
                      <label
                        htmlFor="reps"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reps
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="reps"
                          id="reps"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="sets"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sets
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="sets"
                          id="sets"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    >
                      Add exercise
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                      onClick={closeExerciseModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root> */}
    </div>
  );
}
