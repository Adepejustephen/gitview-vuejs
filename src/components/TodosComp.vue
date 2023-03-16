<template>
  <table class="w-full border-collapse border">
    <thead class=" w-full h-12">
        <tr class=" w-full py-3" >
          <th class=" w-[200px] border border-slate-300 ">Task</th>
          <th class="  border border-slate-300">Status</th>
            <th class="  border border-slate-300">Edit</th>
            <th class="  border border-slate-300">Delete</th>
            
        </tr>
    </thead>
    <todo-comp/>
    <todo-comp/>
    <todo-comp/>
    <todo-comp/>
    <todo-comp/>
  </table>
</template>

<script>
import TodoComp from './TodoComp.vue';

export default {
    name: "TodosComp",
    components: { TodoComp },
}
</script>

<style>

</style>