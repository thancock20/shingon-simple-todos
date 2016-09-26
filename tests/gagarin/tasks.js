/* eslint-env mocha, meteor */
/* global meteor, ddp, expect */

describe('tasks', () => {
  const server = meteor({flavor: 'fiber'});
  const client = ddp(server, {flavor: 'fiber'});

  before(() => {
    server.execute(() => {
      Accounts.createUser({ username: 'Test', password: 'password'});
    });

    client.login({user: {username: 'Test' }, password: 'password' });
    client.call('tasks.create', [ {text: 'Hello, World!'} ]);
    client.sleep(200);

    client.subscribe('tasks');
  });

  describe('tasks.create', () => {
    it('should create a task', () => {
      var tasks = client.collection('tasks');

      const taskCount = Object.keys(tasks).length;

      client.call('tasks.create', [ {text: 'Hello, again!'} ]);
      client.sleep(200);
      tasks = client.collection('tasks');

      expect(Object.keys(tasks).length).to.equal(taskCount + 1);
    });
  });

  describe('tasks.edit', () => {
    it('should change the checked field', () => {
      var tasks = client.collection('tasks');
      const id = Object.keys(tasks)[0];

      expect(tasks[id].checked).to.equal(false);

      client.call('tasks.edit', [ id, {checked: true} ]);
      client.sleep(200);
      tasks = client.collection('tasks');

      expect(tasks[id].checked).to.equal(true);
    });

    it('should change the private field', () => {
      var tasks = client.collection('tasks');
      const id = Object.keys(tasks)[0];

      expect(tasks[id].private).to.equal(false);

      client.call('tasks.edit', [ id, {private: true} ]);
      client.sleep(200);
      tasks = client.collection('tasks');

      expect(tasks[id].private).to.equal(true);
    });
  });

  describe('tasks.delete', () => {
    it('should delete a task', () => {
      var tasks = client.collection('tasks');
      const taskCount = Object.keys(tasks).length;
      const id = Object.keys(tasks)[0];
      client.call('tasks.delete', [ id ]);
      client.sleep(200);
      tasks = client.collection('tasks');

      expect(Object.keys(tasks).length).to.equal(taskCount - 1);
    });
  });
});
