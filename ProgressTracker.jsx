function ProgressTracker({ tasks }) {
  const completedTask = tasks.filter((t) => t.completed);
  const totalTask = tasks.length;

  const percentage =
    totalTask === 0 ? 0 : (completedTask.length / totalTask) * 100;

  return (
    <div className="progress-tracker">
      <p>
        {completedTask.length} out of {totalTask} task completed
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressTracker;