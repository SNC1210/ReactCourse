function Message(props) {
  return (
    <>
      <p>
        you have read
        <strong> {props.count} </strong> advices.
      </p>
    </>
  );
}

export default Message;
