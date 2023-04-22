import React from 'react';
import { Modal } from 'antd';

import { ModalTask } from '../ui/task-modal';

type TaskType = import('entities/task').taskModel.types.TaskType;

export const modalTask = (task: TaskType) => {
    Modal.info({
        closable: true,
        maskClosable: true,
        icon: null,
        footer: null,
        title: task.title,
        content: <ModalTask task={task} />,
    });
};
