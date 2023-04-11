import { Token } from './token';
import { Di } from './di';

class Dependency {
  constructor(readonly config: object) {}
}
abstract class Abstract {
  abstract readonly dep: Dependency;
}
class Concrete {
  constructor(readonly dep: Dependency) {}
}

describe('sharedUtilCore', () => {
  const valueAsString = 'value as string';
  const valueAsObject = { value: 'object' };

  const VALUE_STRING_TOKEN = new Token('value.string');
  const VALUE_OBJECT_TOKEN = new Token('value.object');

  beforeEach(() => {
    Di.add(VALUE_STRING_TOKEN, valueAsString);

    Di.add(VALUE_OBJECT_TOKEN, valueAsObject);

    Di.add(Dependency, Dependency, [VALUE_OBJECT_TOKEN]);
    Di.add(Abstract, Concrete, [Dependency]);
  });

  it('dependency instance', () => {
    const dependency = Di.use(Dependency);
    expect(dependency).toBeInstanceOf(Dependency);
  });

  it('token should have value as string', () => {
    const value = Di.use(VALUE_STRING_TOKEN);
    expect(value).toStrictEqual(valueAsString);
  });

  it('dependency should have config value as object', () => {
    const dependency = Di.use(Dependency);
    expect(dependency.config).toStrictEqual(valueAsObject);
  });

  it('abstract should have concrete instance', () => {
    const concrete = Di.use(Abstract);
    expect(concrete).toBeInstanceOf(Concrete);
  });

  it('concrete should have dependency', () => {
    const concrete = Di.use(Abstract);
    expect(concrete.dep).toBeInstanceOf(Dependency);
  });
});
