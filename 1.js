(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || ''); // 'a'
((false && undefined) || 'a' || ''); // 'a'
('a' && (false || undefined) && ''); // 'undefined'
((false || undefined) && 'a' && ''); // 'undefined'

// The return value of a logical expression can be determined by iteratively evaluating the expression until it results in a single value. For example:

// ((false && undefined) || 'a' || '');
// (false || 'a' || '');
// ('a' || '');
// ('a');

// ------

// ('a' && (false || undefined) && '');
// ('a' && undefined && '');
// (undefined && '');
// (undefined);

// ------

// ((false || undefined) || (false && undefined));
// (undefined || false);
// (false);

