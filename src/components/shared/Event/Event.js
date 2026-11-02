function Event(){
    const remove = (e)=>{
        e.preventDefault()
       console.log("right click is disabled")
    }

    const click = () => {
        console.log("left click is enabled")
    }
    return(
      <>
        <button onContextMenu={remove} onClick={click}>submit</button>
      </>

    )
}

export default Event