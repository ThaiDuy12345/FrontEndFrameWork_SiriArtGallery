function saveSessions(email){
    sessionStorage.setItem("Email",email);
}
function saveTestCoBanSessions(number){
    sessionStorage.setItem("testCoBan",number)
}
function saveTestNangCaoSessions(number){
    sessionStorage.setItem("testNangCao",number)
}
function saveTimeSessions(number){
    sessionStorage.setItem("minutes", number)
}
function getTimeSessions(){
    return sessionStorage.getItem("minutes")
}
function getTestSessions(){
    return sessionStorage.getItem("test");
}
function saveTestSessions(ID){
    sessionStorage.setItem("test",ID);
}
function unsaveSessions(String){
    sessionStorage.removeItem(String);
}
function getSessions(String){
    return sessionStorage.getItem(String);
}
function removeAllSessions(){
    sessionStorage.clear();
}
function saveCurrentTestSessions(number){
    sessionStorage.setItem("currentTest", number);
}
function getCurrentTestSessions(){
    return sessionStorage.getItem("currentTest");
}
function saveResult(ID, Answer){
    sessionStorage.setItem(ID+"_Result", Answer);
}
function getResult(ID){
    return sessionStorage.getItem(ID+"_Result");
}
function removeResult(ID){
    sessionStorage.removeItem(ID+"_Result");
}