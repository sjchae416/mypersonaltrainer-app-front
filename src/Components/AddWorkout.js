import { useState } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import { v4 as uuid } from 'uuid';

function AddWorkout({
	show,
	// routineId,
	selectedRoutineId,
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
}) {
	const [bodyPart, setBodyPart] = useState('Chest');

	// FIXME color change after two consecutive clicks
	const selectHandler = (e) => {
		e.target.style.backgroundColor = 'salmon';
	};

	// if (!show) {
	// 	return null;
	// }

	return (
		// NOTE can exchange line 31~33 with this
		show && (
			// NOTE
			<div className="workout-add-container">
				<div className="workout-add">
					<div className="workout-add-header">
						{/* <div>{selectedRoutineId}</div> */}
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Chest')}
						>
							Chest
						</div>
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Back')}
						>
							Back
						</div>
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Legs')}
						>
							Legs
						</div>
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Shoulder')}
						>
							Shoulder
						</div>
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Triceps')}
						>
							Triceps
						</div>
						<div
							className="workout-body-part"
							onClick={() => setBodyPart('Biceps')}
						>
							Biceps
						</div>
					</div>

					<div className="workout-add-body">
						{bodyPart === 'Chest' &&
							chestWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
						{bodyPart === 'Back' &&
							backWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
						{bodyPart === 'Legs' &&
							legsWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
						{bodyPart === 'Shoulder' &&
							shoulderWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
						{bodyPart === 'Triceps' &&
							tricepsWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
						{bodyPart === 'Biceps' &&
							bicepsWorkouts.map((c) => (
								<div
									key={uuid()}
									className="workout-list"
									onClick={() => {
										workoutNameHandler(c);
									}}
								>
									{c}
								</div>
							))}
					</div>

					<div className="workout-add-footer">
						<div className="workout-counter">
							<form>
								<div>workout: {workoutName}</div>
								<label>reps:</label>
								<input type="number" onChange={repsHandler}></input>
								<label>sets:</label>
								<input type="number" onChange={setsHandler}></input>
							</form>
						</div>
						<div className="workout-btn">
							<button
								onClick={() => {
									addWorkoutHandler(selectedRoutineId);
								}}
							>
								<AddBoxOutlinedIcon
									className="workout-add-btn"
									aria-hidden="true"
								></AddBoxOutlinedIcon>
							</button>
							<button onClick={closeAddWorkout}>
								<DisabledByDefaultOutlinedIcon
									className="workout-close-btn"
									aria-hidden="true"
								></DisabledByDefaultOutlinedIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
}

export default AddWorkout;
