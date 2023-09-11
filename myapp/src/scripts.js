function get_query(){
    let val = document.getElementById("first_search_box").value
    if (val != ""){
        alert(val)
    }
    if (val.toLowerCase() == "w3schools"){
        window.location.href = "https://www.w3docs.com"
    }
}
