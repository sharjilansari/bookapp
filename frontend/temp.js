const fun = async () => {
    let data = await axios.get("http://localhost:5000/getuserdata");
    console.log(data);
}

fun()