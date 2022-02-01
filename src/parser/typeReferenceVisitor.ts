import ZserioParserVisitor from '../antlr4/ZserioParserVisitor.js';
import { EntityReference } from './entityReference';
import { convertCompleteRange } from './utils';

export class TypeReferenceVisitor extends ZserioParserVisitor {
    references: EntityReference[] = [];
    override visitTypeReference(ctx: any) {
        const qualifiedName = ctx.qualifiedName();
        if (qualifiedName) {
            const name = qualifiedName.getText();
            const range = convertCompleteRange(qualifiedName.start, qualifiedName.stop);
            this.references.push(new EntityReference(name, range));
        }
        return this['visitChildren'](ctx);
    }
}
