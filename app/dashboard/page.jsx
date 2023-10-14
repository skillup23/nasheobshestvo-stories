import FormSendWords from "@/components/FormSendWords";

function Dashboard() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 m-auto'>
      <div>
        <h2>Администратор</h2>
        <p>Настройки</p>
        <p>Выход</p>
      </div>
      <FormSendWords />
    </div>
  );
}

export default Dashboard;
