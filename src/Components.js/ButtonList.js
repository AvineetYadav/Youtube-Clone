import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex items-center">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Song" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Valentines" />
    </div>
  );
};

export default ButtonList;
