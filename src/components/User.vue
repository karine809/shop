<template>
  <div class="user-container d-flex text-center col-lg-6 col-lg-offset-6">
    <h1> This is User page</h1>
<!--    <div class="div1">-->
<!--      <table class="table table-dark table-striped table-bordered" >-->
<!--        <thead rowspan="3">-->
<!--        <tr>-->
<!--          <td scope="row" colspan="4"><span class="big">VAR</span> vs <span class="big">LET</span> vs <span class="big">CONST</span></td>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr>-->
<!--          <th scope="row"></th>-->
<!--          <th scope="col">var</th>-->
<!--          <th scope="col">let</th>-->
<!--          <th scope="col">const</th>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Stored in Global Scope</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N1"><label for="N1"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N2" checked><label for="N2"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N3" checked><label for="N3"></label></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Function Scope</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N4"><label for="N4"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N5"><label for="N5"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N6"><label for="N6"></label></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Block Scope</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N7" checked><label for="N7"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N8"><label for="N8"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N9"><label for="N9"></label></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Can Be Reassigned?</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N10"><label for="N10"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N11"><label for="N11"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N12" checked><label for="N12"></label></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Can Be Redeclared?</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N13"><label for="N13"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N14" checked><label for="N14"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N15" checked><label for="N15"></label></td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td scope="row" class="label">Can Be Hoisted?</td>-->
<!--          <td><input class="chbox" type="checkbox" id="N16"><label for="N16"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N17" checked><label for="N17"></label></td>-->
<!--          <td><input class="chbox" type="checkbox" id="N18" checked><label for="N18"></label></td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
name: "User"
}
</script>

<style scoped>
.user-container{
  margin: 60px 100px;
}
/*table {*/
/*  width: 600px;*/
/*  margin: 80px;*/
/*}*/
/*thead{*/
/*  text-align: center;*/
/*}*/
/*.big{*/
/*  font-family: "Roboto Light";*/
/*  font-size: 50px;*/
/*}*/
/*th{*/
/*  width: 25%;*/
/*}*/
/*td{*/
/*  vertical-align: middle;*/
/*  padding: 3px !important;*/
/*  height: 60px;*/
/*}*/
/*.label{*/
/*  text-align: left;*/
/*}*/
/*.chbox{*/
/*  display:none;*/
/*}*/

/*.chbox + label {*/
/*  display:inline-block;*/
/*  padding: 0 0 0 0px;*/
/*  background:url("../images/on.png") no-repeat;*/
/*  height: 50px;*/
/*  width: 50px;;*/
/*  background-size: 50%;*/
/*  vertical-align: middle;*/
/*  background-position: center;*/
/*}*/

/*.chbox:checked + label {*/
/*  background:url("../images/off.png") no-repeat;*/
/*  height: 50px;*/
/*  width: 50px;*/
/*  display:inline-block;*/
/*  background-size: 50%;*/
/*  vertical-align: middle;*/
/*  background-position: center;*/
/*}*/

</style>
