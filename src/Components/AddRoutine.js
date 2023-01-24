import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

function AddRoutine({ addRoutineHandler }) {
	return (
		// REVIEW choose className
		<div
			className="routine routine-add"
			style={{ background: 'rgba(255, 255, 255, 0)' }}
		>
			<div className="routine-footer">
				<button>
					<AddBoxOutlinedIcon
						className="routine-add-btn"
						aria-hidden="true"
						onClick={() => {
							addRoutineHandler();
						}}
					></AddBoxOutlinedIcon>
				</button>
			</div>
		</div>
	);
}

export default AddRoutine;
