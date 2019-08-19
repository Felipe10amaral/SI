import { TestBed } from '@angular/core/testing';
import { ConvidadosService } from "./convidados.service";
describe('ConvidadosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ConvidadosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=convidados.service.spec.js.map