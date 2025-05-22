# dialoghi standard
execute if predicate atherion:common as @s run blabber dialogue start atherion:master/common/warrior
execute if predicate atherion:warrior/t0 as @s run blabber dialogue start atherion:master/warrior/t0
#dialoghi se fai parte di un altra gilda
execute if predicate atherion:is_a/alchemist as @s run blabber dialogue start atherion:master/wrong_guild/alchemist/to_warrior
execute if predicate atherion:is_a/archer as @s run blabber dialogue start atherion:master/wrong_guild/archer/to_warrior
execute if predicate atherion:is_a/bard as @s run blabber dialogue start atherion:master/wrong_guild/bard/to_warrior
execute if predicate atherion:is_a/blacksmith as @s run blabber dialogue start atherion:master/wrong_guild/blacksmith/to_warrior
execute if predicate atherion:is_a/carpenter as @s run blabber dialogue start atherion:master/wrong_guild/carpenter/to_warrior
execute if predicate atherion:is_a/chef as @s run blabber dialogue start atherion:master/wrong_guild/chef/to_warrior
execute if predicate atherion:is_a/farmer as @s run blabber dialogue start atherion:master/wrong_guild/farmer/to_warrior
execute if predicate atherion:is_a/mage as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_warrior
execute if predicate atherion:is_a/miner as @s run blabber dialogue start atherion:master/wrong_guild/miner/to_warrior
execute if predicate atherion:is_a/shadow as @s run blabber dialogue start atherion:master/wrong_guild/shadow/to_warrior