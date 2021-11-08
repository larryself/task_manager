import { createServer, Factory, Model, Response } from 'miragejs';

export function startMirage() {
  return createServer({
    models: {
      auth: Model,
      tasks: Model,
      idTasks: Model,
      users: Model,
      contents: Model,
      notifications: Model,
      files: Model,
    },
    factories: {
      notification: Factory.extend({
        type(i) {
          const types = ['stick', 'comment', 'video', 'audio', 'photo'];
          return types[i % types.length];
        },
        date() {
          return '2021-10-21T09:03:50.290Z';
        },
        message(i) {
          const messages = ['Название задачи', 'string', 'messages'];
          return messages[i % messages.length];
        },
        user(i) {
          const names = ['Аркадий Юрченко', 'Семён Щеглов', 'string string'];
          return { id: [i % names.length], name: names[i % names.length] };
        },

        task(i) {
          const tasks = ['Название задачи'];
          return { id: i % tasks.length, name: tasks[i % tasks.length] };
        },
      }),
      task: Factory.extend({
        name(i) {
          const names = [
            'Название повседневная практика показывает',
            'Название равным образом начало повседневной работы',
            'Название с другой стороны начало повседневной работы по формиро',
          ];
          return names[i % names.length];
        },
        type(i) {
          const types = ['audio', 'photo', 'video'];
          return { id: i % types.length, name: types[i % types.length] };
        },

        description() {
          return 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение форм развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.';
        },
        author() {
          return {
            name: 'Семён Щеглов',
            email: 'user@example.com',
            avatar: 'string',
            role: {
              name: 'manager',
            },
          };
        },
        executor(i) {
          const executors = [
            'Инесса Соловьёвa',
            'Гена Черемнов',
            'Дмитрий Румянцев',
            'Эльза Калининa',
            'Тыгыдык Тыгыдыков',
            'Аркадий Юрченко',
          ];
          return { id: i % executors.length, name: executors[i % executors.length] };
        },
        dateCreated() {
          return '2021-10-29T14:04:44.339Z';
        },
        dateExpired(i) {
          const dates = [
            '2021-11-12T08:26:31.174Z',
            '2021-11-13T08:26:31.174Z',
            '2021-11-14T08:26:31.174Z',
            '2021-11-15T08:26:31.174Z',
            '2021-11-16T08:26:31.174Z',
            '2021-11-17T08:26:31.174Z',
            '2021-11-18T08:26:31.174Z',
          ];
          return dates[i % dates.length];
        },
        files() {
          return [
            {
              id: 1,
              name: 'Материалы.zip',
              dateCreated: '2021-10-29T14:04:44.339Z',
              format: 'zip',
              url: '../../../public/img/logo.svg',
              size: '61 Мб',
            },
            {
              id: 2,
              name: 'Техническое задание.doc',
              dateCreated: '2021-10-29T14:04:44.339Z',
              format: 'doc',
              url: '../../../public/img/avatar.png',
              size: '215 Кб',
            },
          ];
        },
        contents() {
          return [
            {
              type: {
                name: 'video',
              },
              name: 'string',
              dateCreated: '2021-10-29T14:04:44.339Z',
              author: {
                name: 'string',
              },
              format: 'jpg',
              url: 'string',
              preview: 'string',
            },
          ];
        },
        comments() {
          return [
            {
              id: 1,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Адам Галкин',
              },
              message: 'Задача организации, в особенности же новая модель организационной',
            },
            {
              id: 2,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Станислав Щукин',
              },
              message:
                'Товарищи! укрепление и развитие структуры требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
            },
            {
              id: 3,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Адам Галкин',
              },
              message: 'Задача организации, в особенности же новая модель организационной',
            },
          ];
        },
        status(i) {
          const statuses = ['inWork', 'completed', 'waiting'];
          return { id: i % statuses.length, name: statuses[i % statuses.length] };
        },
      }),
      user: Factory.extend({
        name(i) {
          const names = [
            'Инесса Соловьёвa',
            'Оскар Калинин',
            'Альбина Ткаченко',
            'Галина Адамова',
            'София Мельник',
            'Адам Галкин',
          ];
          return names[i];
        },
        email(i) {
          const mails = ['albina_t@gmail.com', 'aaa@mail.ru', 'vv@mail.ru', 'mn@gg.gg', 'cm@gg.gg', 'admin@gg.gg'];
          return mails[i];
        },
        password() {
          return 'fsdfsdfsdfsd';
        },
        avatar() {
          return '../../../public/img/avatar.png';
        },
        role(i) {
          const roles = ['manager', 'contentMaker', 'admin'];
          return { id: i % roles.length, name: roles[i % roles.length] };
        },
      }),
      content: Factory.extend({
        id(i) {
          return i + 1;
        },
        type(i) {
          const types = ['audio', 'photo', 'video'];
          return { id: i % types.length, name: types[i % types.length] };
        },
        name() {
          return 'Название равным образом начало повседневной работы';
        },
        dateCreated(i) {
          const dates = [
            '2021-11-12T08:26:31.174Z',
            '2021-11-13T08:26:31.174Z',
            '2021-11-14T08:26:31.174Z',
            '2021-11-15T08:26:31.174Z',
            '2021-11-16T08:26:31.174Z',
            '2021-11-17T08:26:31.174Z',
            '2021-11-18T08:26:31.174Z',
          ];
          return dates[i % dates.length];
        },
        author(i) {
          const authors = ['семен селезнев', 'Стринг Стрингов', 'хз хзов', 'Вася Пупкин', 'Аркадий Юрченко', 'Zyz zyz'];
          return { id: i % authors.length, name: authors[i % authors.length] };
        },
        format() {
          return 'jpg';
        },
        url(i) {
          const urls = [
            'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
            '../public/img/meadow.jpg',
            '../public/test/mov_bbb.mp4',
            '../public/img/mountains.jpg',
            '../public/img/lake.jpg',
            'https://temp.media/video/?height=500&width=640&length=100&text=Тралаллалалалла',
          ];
          return urls[i % urls.length];
        },
        preview(i) {
          const previews = [
            '../public/img/audio.jpg',
            '../public/img/sunset.jpg',
            '../public/img/underground.jpg',
            '../public/img/mountains.jpg',
            '../public/img/lake.jpg',
            '../public/img/coast.jpg',
          ];
          return previews[i % previews.length];
        },
      }),
      auth: Factory.extend({
        email(i) {
          const mails = ['albina_t@gmail.com', 'aaa@mail.ru', 'vv@mail.ru', 'mn@gg.gg', 'cm@gg.gg', 'admin@gg.gg'];
          return mails[i];
        },
        password() {
          return '12345';
        },
      }),
      idTask: Factory.extend({
        name(i) {
          const names = [
            'Заголовок задачи с другой стороны консультация с широким активом позволяет',
            'Заголовок задачи с другой стороны консультация с широким активом позволяет',
            'Заголовок задачи с другой стороны консультация с широким активом позволяет',
            'Заголовок задачи с другой стороны консультация с широким активом позволяет',
          ];
          return names[i % names.length];
        },
        type(i) {
          const types = ['audio', 'photo', 'video'];
          return { id: i % types.length, name: types[i % types.length] };
        },
        description() {
          return 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение форм развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.';
        },

        files() {
          return [
            {
              id: 1,
              name: 'Материалы.zip',
              dateCreated: '2021-10-29T14:04:44.339Z',
              format: 'zip',
              url: '../../../public/img/logo.svg',
              size: '61 Мб',
            },
            {
              id: 2,
              name: 'Техническое задание.doc',
              dateCreated: '2021-10-29T14:04:44.339Z',
              format: 'doc',
              url: '../../../public/img/avatar.png',
              size: '215 Кб',
            },
          ];
        },
        author() {
          return {
            name: 'Семён Щеглов',
            email: 'user@example.com',
            avatar: 'string',
            role: {
              name: 'manager',
            },
          };
        },
        executor() {
          return {
            name: 'Станислав Щукин',
            email: 'user@user.user',
            avatar: 'string',
            role: {
              name: 'admin',
            },
          };
        },
        dateCreated() {
          return '2021-10-29T14:04:44.339Z';
        },
        dateExpired() {
          return '2021-10-29T14:04:44.339Z';
        },
        contents() {
          return [
            {
              type: {
                name: 'video',
              },
              name: 'string',
              dateCreated: '2021-10-29T14:04:44.339Z',
              author: {
                name: 'string',
              },
              format: 'jpg',
              url: 'string',
              preview: 'string',
            },
          ];
        },
        comments() {
          return [
            {
              id: 1,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Адам Галкин',
              },
              message: 'Задача организации, в особенности же новая модель организационной',
            },
            {
              id: 2,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Станислав Щукин',
              },
              message:
                'Товарищи! укрепление и развитие структуры требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
            },
            {
              id: 3,
              date: '2021-10-29T14:04:44.339Z',
              user: {
                name: 'Адам Галкин',
              },
              message: 'Задача организации, в особенности же новая модель организационной',
            },
          ];
        },
        status(i) {
          const statuses = ['inWork', 'completed', 'waiting'];
          return { name: statuses[i % statuses.length] };
        },
      }),
      file: Factory.extend({
        file(i) {
          const files = [
            '../public/img/sunset.jpg',
            '../public/img/underground.jpg',
            '../public/img/mountains.jpg',
            '../public/img/lake.jpg',
            '../public/img/coast.jpg',
          ];
          return files[i % files.length];
        },
      }),
    },
    seeds(server) {
      server.createList('user', 6);
      server.createList('content', 40);
      server.createList('task', 6);
      server.createList('notification', 6);
      server.createList('auth', 5);
      server.createList('idTask', 6);
      server.createList('file', 6);
    },
    routes() {
      this.namespace = 'api';
      this.get('/contents', (schema, request) => {
        const { count } = request.queryParams;
        const { page } = request.queryParams;
        const { contents }: any = schema;
        const contentCard = contents.all().filter((content: any, index: number) => {
          if (+page > 1) {
            return index > +count - 3 && index <= +count;
          }
          return index < +count;
        });

        const totalCards = contents.all().length;
        return { contents: contentCard.models, total: totalCards };
      });
      this.post('/files', () => new Response(200));
      this.post('/comments', () => new Response(200));
      this.get('/tasks', (schema) => {
        const { tasks }: any = schema;
        return tasks.all();
      });
      this.delete('/tasks/:id', (schema, request) => {
        const { id } = request.params;
        const { tasks }: any = schema;
        return tasks.find(id).destroy();
      });

      this.put('/tasks/:id', (schema, request) => {
        const { id } = request.params;
        const { tasks }: any = schema;
        const newAttrs = JSON.parse(request.requestBody);
        const { type } = newAttrs;
        const { executor } = newAttrs;
        const { author } = newAttrs;
        newAttrs.type = { name: type };
        newAttrs.author = { name: author };
        newAttrs.executor = { name: executor };
        const task = tasks.find(id);
        return task.update(newAttrs);
      });

      this.post('/tasks/', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { tasks }: any = schema;
        const { type } = attrs;
        const { executor } = attrs;
        const { author } = attrs;
        const dateCreated = '2021-10-29T14:04:44.339Z';
        attrs.type = { name: type };
        attrs.status = { name: 'waiting' };
        attrs.executor = { name: executor };
        attrs.dateCreated = dateCreated;
        attrs.author = { name: author };
        tasks.create(attrs);
        return new Response(201);
      });

      this.get('/tasks/:id', (schema, request) => {
        const { id } = request.params;
        const { tasks }: any = schema;
        return tasks.find(id);
      });

      this.get('/users', (schema) => {
        const { users }: any = schema;
        return users.all();
      });

      this.get('/users/:id', (schema, request) => {
        const { id } = request.params;
        const { users }: any = schema;
        return users.find(id);
      });

      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { users }: any = schema;
        const { role } = attrs;
        attrs.role = { name: role };
        attrs.avatar = '../public/img/avatar.svg';
        if (Object.keys(attrs.avatar)) {
          attrs.avatar = '../public/img/sunset.jpg';
        }
        users.create(attrs);
        return new Response(201);
      });

      this.put('/users/:id', (schema, request) => {
        const { id } = request.params;
        const { users }: any = schema;
        const newAttrs = JSON.parse(request.requestBody);
        const user = users.find(id);
        if (Object.keys(newAttrs.avatar)) {
          newAttrs.avatar = '../public/img/sunset.jpg';
        }
        user.update(newAttrs);
        return new Response(204);
      });
      this.delete('/users/:id', (schema, request) => {
        const { id } = request.params;
        const { users }: any = schema;
        return users.find(id).destroy();
      });
      this.get('/notification', (schema) => {
        const { notifications }: any = schema;
        return notifications.all();
      });
      this.post('/auth', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const { email, password } = attrs;
        const mails = ['albina_t@gmail.com', 'aaa@mail.ru', 'vv@mail.ru', 'mn@gg.gg', 'cm@gg.gg', 'admin@gg.gg'];
        const passwords = '12345';
        if (mails.includes(email) && passwords.includes(password)) {
          return new Response(201);
        }
        return new Response(500);
      });
    },
  });
}
