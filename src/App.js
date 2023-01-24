import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Program from './Components/Program';
import { v4 as uuid } from 'uuid';

function App() {
	const [show, setShow] = useState(false);
	const [selectedRoutineId, setSelectedRoutineId] = useState('');
	const [routines, setRoutines] = useState(() => {
		return JSON.parse(localStorage.getItem('Routines')) || [];
	});
	const [workouts, setWorkouts] = useState([]);
	const [workoutName, setWorkoutName] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const chestWorkouts = [
		'Bench Press',
		'Dumbell Press',
		'Dumbell Fly',
		'Incline Press',
	];
	const backWorkouts = [
		'Dead Lift',
		'Pull Up',
		'Lat Pull Down',
		'Barbell Row',
		'Cable Seated Row',
	];
	const legsWorkouts = [
		'Squat',
		'Leg Press',
		'Leg Extension',
		'Leg Curl',
		'Seated Calf Raise',
	];
	const shoulderWorkouts = [
		'Over Head Press',
		'Dumbell Shoulder Press',
		'Side Lateral Raise',
		'Bent Over Lateral Raise',
	];
	const tricepsWorkouts = [
		'Lying Triceps Extension',
		'Cable Push Down',
		'Cable Over Head Push',
	];
	const bicepsWorkouts = [
		'Barbell Curl',
		'Dumbell Curl',
		'Incline Curl',
		'Cable Curl',
	];

	useEffect(() => {
		// console.log('routines', routines);
		localStorage.setItem('Routines', JSON.stringify(routines));
	}, [routines]);

	useEffect(() => {
		// NOTE filter workouts with routineId from workouts state
		const filteredWorkouts = workouts.filter(
			(workout) => workout.routineId === selectedRoutineId
		);
		// console.log('filteredWorkouts', filteredWorkouts);

		// NOTE update routine.workouts with filteredWorkouts
		const updatedRoutines = routines.map((routine) => {
			if (routine.id === selectedRoutineId) {
				return {
					...routine,
					workouts: filteredWorkouts,
				};
			} else {
				return routine;
			}
		});
		// console.log('updatedRoutines', updatedRoutines);
		setRoutines(updatedRoutines);

		// console.log('workouts', workouts);
	}, [workouts]);

	const openAddWorkout = (id) => {
		setSelectedRoutineId(id);
		setShow(true);
	};

	const closeAddWorkout = () => {
		setWorkoutName('');
		setReps('');
		setSets('');
		setShow(false);
	};

	const workoutNameHandler = (w) => {
		setWorkoutName(w);
	};

	const repsHandler = (e) => {
		setReps(e.target.value);
	};

	const setsHandler = (e) => {
		setSets(e.target.value);
	};

	// NOTE append a new workout object to the workouts state
	const addWorkoutHandler = (id) => {
		if (workoutName !== '' && reps !== '' && sets !== '') {
			setWorkouts((prevWorkouts) => [
				...prevWorkouts,
				{
					routineId: id,
					id: uuid(),
					workoutName: workoutName,
					reps: reps,
					sets: sets,
				},
			]);
		}
		setWorkoutName('');
		setReps('');
		setSets('');
		setShow(false);
	};

	const deleteWorkout = (rid, wid) => {
		setSelectedRoutineId(rid);
		const filteredWorkouts = workouts.filter((workout) => workout.id !== wid);

		setWorkouts(filteredWorkouts);
	};

	// NOTE append a new routine object to the routines state
	const addRoutineHandler = () => {
		setRoutines((prevRoutines) => [
			...prevRoutines,
			{ id: uuid(), workouts: [] },
		]);
	};

	const deleteRoutine = (id) => {
		const filteredRoutines = routines.filter((routine) => routine.id !== id);

		setRoutines(filteredRoutines);
	};

	return (
		<div className="App">
			<Header />
			<Program
				routines={routines}
				selectedRoutineId={selectedRoutineId}
				addRoutineHandler={addRoutineHandler}
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
			{/* <AddWorkout
        show={show}
        routines={routines}
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
			/> */}
		</div>
	);
}

export default App;
