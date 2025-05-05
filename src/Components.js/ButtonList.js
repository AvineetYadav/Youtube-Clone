import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex items-center flex-wrap justify-center mx-auto">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Song" />
      <Button name="Live" />

      {/* These buttons will be hidden on small screens and shown on larger screens */}
      <div className="hidden sm:flex">
        <Button name="Cricket" />
        <Button name="Soccer" />
        <Button name="Valentines" />
      </div>
    </div>
  );
};

export default ButtonList;
