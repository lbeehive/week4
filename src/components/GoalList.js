import GoalItem from './GoalItem'

function GoalList() {
  return (
    <ul>
      <GoalItem id="g1">
        <h2>Teach React in a highly-understandable way</h2>
        <p>
          I want to ensure, that you get the most out of this book and you learn
          all about React!
        </p>
      </GoalItem>
      <GoalItem id="g2">
        <h2>Allow you to practice what you learned</h2>
        <p>
          Reading and learning is fun and helpful but you only master a topic,
          if you really work with it! That's why I want to prepare many
          exercises that allow you to practice what you learned.
        </p>
      </GoalItem>
      <GoalItem id="g3">
        <h2>Motivate you to continue learning</h2>
        <p>
          As a developer, learning never ends. I want to ensure that you enjoy
          learning and you're motivated to dive into advanced (React) resources
          after finishing this book. Maybe my complete React video course?
        </p>
      </GoalItem>
    </ul>
  );
}

export default GoalList;