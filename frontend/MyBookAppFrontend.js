
    const form = document.getElementById("book-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const isbn = document.getElementById("isbn").value;
        const author = document.getElementById("author").value;

        let data = await axios.post("http://localhost:5000/postuserdata", {
            title,
            isbn,
            author
        });

        console.log(data.data)
    }) 