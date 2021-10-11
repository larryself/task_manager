import './task_no_result.scss';
import '../../components/header/header';
import '../../components/button/button';
import '../../components/task-aside/task-aside';
import '../../components/task-info/task-info';
import '../../components/task-result/task-result';
import '../../components/task-comment/task-comment';
import { openModal } from '../../components/modal/modal';

const delBtn = document.querySelector('.task__btn-delete');
delBtn.addEventListener('click', () => {
  openModal();
});
