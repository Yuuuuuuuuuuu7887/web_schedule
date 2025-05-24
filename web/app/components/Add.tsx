import { createCamps } from "@/utils/actions";
import Form from "./Form";
const Add = () => {
  return (
    <div>
        <form action={createCamps}>
          <Form />
          <button type="submit">เพิ่ม</button>
        </form>
    </div>
  )
}
export default Add