import { handleSubmitHTML } from "../_actions/handleSubmitHTML";

export default function Page() {
  return (
    <div>
      <h1>HTMLに準拠したフォーム</h1>

      <form action={handleSubmitHTML}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Submit HTML Form</button>
      </form>

    </div>
  );
}
