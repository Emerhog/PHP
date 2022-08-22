<?php include('../../header.php'); ?>

<div class="news">

<script type="text/javascript">
  graphJSON('http://localhost:8080/Test/pages/API/history_of_rest.php', 'rest_status', 'Отпуска');
  graphJSON('http://localhost:8080/Test/pages/API/departament_employee.php', 'departament_id', 'Сотрудники по отделам');
</script>

<div id="rest_status" style="width: 450px; height: 300px;"></div>
<div id="departament_id" style="width: 450px; height: 300px;"></div>

</div>

<?php include('../../footer.php'); ?>

