import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Workout({
	routineId,
	workoutId,
	workoutName,
	reps,
	sets,
	openAddWorkout,
	deleteWorkout,
}) {
	return (
		<div className="workout">
			<div className="workout-name">
				{/* {workoutId} */}
				{workoutName}
			</div>

			<div className="workout-footer">
				<div className="workout-counter">
					{reps} reps {sets} sets
				</div>
				<button
					onClick={() => {
						openAddWorkout(routineId);
					}}
				>
					<SettingsOutlinedIcon
						className="workout-setting-btn"
						aria-hidden="true"
					></SettingsOutlinedIcon>
				</button>
				<button
					onClick={() => {
						// FIXME deletes every workout and alters routines state object form
						// console.log('workoutId', workoutId);
						deleteWorkout(routineId, workoutId);
						// FIXED
					}}
				>
					<DeleteForeverOutlinedIcon
						className="workout-delete-btn"
						aria-hidden="true"
					></DeleteForeverOutlinedIcon>
				</button>
			</div>
		</div>
	);
}

export default Workout;
