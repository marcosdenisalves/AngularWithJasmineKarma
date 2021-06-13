import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPredfix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPredfix('app');
    expect(id).toContain('app-');
  });

});
