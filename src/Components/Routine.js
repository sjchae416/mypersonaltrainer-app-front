import Workout from './Workout';
import AddWorkout from './AddWorkout';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

function Routine({
	routineId,
	selectedRoutineId,
	workouts,
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
	// console.log('routine workouts', workouts);
	return (
		<div className="routine">
			<div className="routine-title">
				Routine
				{/* {routineId} */}
			</div>
			{workouts &&
				workouts.map((workout) => (
					<Workout
						key={workout.id}
						routineId={workout.routineId}
						workoutId={workout.id}
						workoutName={workout.workoutName}
						reps={workout.reps}
						sets={workout.sets}
						deleteWorkout={deleteWorkout}
					/>
				))}

			<div className="routine-footer">
				<button
					onClick={() => {
						openAddWorkout(routineId);
					}}
				>
					<AddBoxOutlinedIcon
						className="routine-add-btn"
						aria-hidden="true"
					></AddBoxOutlinedIcon>
				</button>
				<button
					onClick={() => {
						deleteRoutine(routineId);
					}}
				>
					<DeleteForeverOutlinedIcon
						className="routine-delete-btn"
						aria-hidden="true"
					></DeleteForeverOutlinedIcon>
				</button>
			</div>

			<AddWorkout
				show={show}
				// routineId={routineId}
				selectedRoutineId={selectedRoutineId}
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
			/>
		</div>
	);
}

export default Routine;
