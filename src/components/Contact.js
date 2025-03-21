const Contact = () => {
  return (
    <div>
      <h1 className="font-bold m-2 p-2 text-3xl">Contact us</h1>
      <form>
        <input
          type="text"
          className="= p-2 m-2 border border-black rounded-lg"
          placeholder="name"
        ></input>
        <input
          className="p-2 m-2 border border-black rounded-lg"
          placeholder="msg"
        ></input>
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
