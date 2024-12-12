let user_name = prompt('Digite o seu nome de usuário: ');
let list_of_tasks = [];

while (true) {
    let menu = prompt(`Seja Bem-Vindo ${user_name}!\nDigite que ação você deseja realizar:\n1) Criar Tarefa\n2) Listar Tarefas\n3) Remover Tarefa\n4) Atualizar Tarefa\n0) Sair\n: `);
    switch (menu) {
        
        case '1':

            let task_name = prompt('Digite o nome da tarefa: ');
            let task_description = prompt('Digite a descrição da tarefa: ');
            let task_status = 'Pendente'
            let task = {
                id: list_of_tasks.length + 1,
                name: task_name,
                description: task_description,
                status: task_status
            };
            list_of_tasks.push(task)
            alert('Sua tarefa foi criada com sucesso!');
            break;

        case '2':

            if (list_of_tasks.length === 0) {
                alert('Nenhuma tarefa foi criada.');
            } else {
                let tasksList = '';
                for (current_task of list_of_tasks) {
                    let task_ = current_task
                    if (task_.status === 'Pendente') {
                        tasksList += `ID: ${task_.id}\nNome: ${task_.name}\nDescrição: ${task_.description} \nStatus: Pendente `;
                        alert(tasksList)
                    } else {
                        tasksList += `ID: ${task_.id}\nNome: ${task_.name}\nDescrição: ${task_.description} \nStatus: Concluída `
                        alert(tasksList)
                    }
                }
            }
            break;

        case '3':

            let task_to_remove = prompt('Digite o ID da tarefa que deseja remover: ');
            if (list_of_tasks.length === 0) {
                alert('Nenhuma tarefa foi criada.');
            } else if (list_of_tasks.length > 0) {
                for (current_task of list_of_tasks) {
                    if (current_task.id == task_to_remove) {
                        list_of_tasks.splice(list_of_tasks.indexOf(current_task), 1);
                    } else {
                        alert('Tarefa não encontrada.');
                    }
                }
            }
            break;

        case '4':

            let task_to_update = prompt('Digite o ID da tarefa que deseja alterar: ');
            if (list_of_tasks.length === 0) {
                alert('Nenhuma tarefa foi criada.');
            } else if (list_of_tasks.length > 0) {
                for (current_task of list_of_tasks) {
                    if (current_task.id == task_to_update) {
                        let task_name = prompt('Digite o novo nome da tarefa: ');
                        let task_description = prompt('Digite a nova descrição da tarefa: ');
                        let task_status = prompt('Digite o novo status da tarefa: ');
                        current_task.name = task_name;
                        current_task.description = task_description;
                        current_task.status = task_status;
                        alert('Tarefa atualizada com sucesso!');
                    } else {
                            alert('Tarefa não encontrada.');
                    }
                }
            }
            break;

        case '0': 
        
            alert(`${user_name}, obrigado por usar o nosso sistema de gerenciamento de tarefas!`)
            break;

        case _:
            
            alert('Opção inválida.');

    }

    if (menu === '0') {
        break;
    }

}