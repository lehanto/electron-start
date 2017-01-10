function tweet(){
var result = "てすと";
location.href = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(result) +"&hashtags=hoge";
}