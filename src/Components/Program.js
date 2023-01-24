import Routine from './Routine';
import AddRoutine from './AddRoutine';

function Program({
	routines,
	selectedRoutineId,
	addRoutineHandler,
	deleteRoutine,
	openAddWorkout,
	show,
	workoutName,
	chestWorkouts,
	backWorkouts,
	legsWorkouts,
	shoulderWorkouts,
	tricepsWorkouts,
	bicepsWorkouts,
	closeAddWorkout,
	workoutNameHandler,
	repsHandler,
	setsHandler,
	addWorkoutHandler,
	deleteWorkout,
}) {
	return (
		<div className="program">
			{routines &&
				routines.map((routine) => (
					<Routine
						key={routine.id}
						routineId={routine.id}
						selectedRoutineId={selectedRoutineId}
						workouts={routine.workouts}
						deleteRoutine={deleteRoutine}
						openAddWorkout={openAddWorkout}
						show={show}
						workoutName={workoutName}
						chestWorkouts={chestWorkouts}
						backWorkouts={backWorkouts}
						legsWorkouts={legsWorkouts}
						shoulderWorkouts={shoulderWorkouts}
						tricepsWorkouts={tricepsWorkouts}
						bicepsWorkouts={bicepsWorkouts}
						closeAddWorkout={closeAddWorkout}
						workoutNameHandler={workoutNameHandler}
						repsHandler={repsHandler}
						setsHandler={setsHandler}
						addWorkoutHandler={addWorkoutHandler}
						deleteWorkout={deleteWorkout}
					/>
				))}
			<AddRoutine addRoutineHandler={addRoutineHandler} />
		</div>
	);
}

export default Program;
