//fragment
import "./style.css";
const MyComponent = () =>{
    // const hoidanit = "terry";
    // const hoidanit = {
    //     name: "dat",
    //     age: 16
    // };
    const hoidanit=[1,2,3]
    return (
      <>
        {/* <div>{hoidanit.name} and locus va thanh</div> */}
        <div>{JSON.stringify(hoidanit)} and locus va thanh</div>
        <div>{console.log("Terry")}</div>
        <div className="child">child</div>
      </>
      
    );
  }
export default MyComponent;