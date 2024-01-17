import ZserioParserVisitor from '../antlr4/ZserioParserVisitor';
import { TypeReferenceContext } from '../antlr4/ZserioParser'
import { EntityReference } from './entityReference';
import { convertCompleteRange } from './utils';

export class TypeReferenceVisitor extends ZserioParserVisitor<void> {
    references: EntityReference[] = [];
    override visitTypeReference = (ctx: TypeReferenceContext) => {
        const qualifiedName = ctx.qualifiedName();
        if (qualifiedName) {
            const name = qualifiedName.getText();
            const range = convertCompleteRange(qualifiedName.start, qualifiedName.stop);
            this.references.push(new EntityReference(name, range));
        }
        return this.visitChildren(ctx);
    }
}
