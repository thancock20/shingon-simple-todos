import defaultMethods from '/lib/default_methods';

export default function ({Collections}) {
  const {Task} = Collections;

  defaultMethods('tasks', Task);
}
