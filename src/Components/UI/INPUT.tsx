interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {

  type ?:string;
}

const INPUT :React.FC <IProps> = ({ ...rest }) => {
  return (
    <>
      <input style={{lineHeight:'2'}} className=" py-2 px-2  bg-gray-100  border caret-red-400 focus:outline-none focus:bg-gray-200 rounded-md"  {...rest} />
    </>
  );
};

export default INPUT;
