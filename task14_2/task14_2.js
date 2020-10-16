function elementsByTagName(node, name) {
    let nodes=[];

    function f(node) {
        for (let n of node.childNodes) {
            if (n.nodeType == 1) {
                if (n.nodeName == name.toUpperCase()) nodes.push(n);
                f(n);
            }
        }
    }
    f(node);
    return nodes;
}

console.log(elementsByTagName(document.body, 'span'));

