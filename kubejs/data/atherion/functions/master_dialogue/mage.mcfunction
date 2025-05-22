# asdjsd
execute if predicate atherion:common as @s run blabber dialogue start atherion:master/common/mage
execute if predicate atherion:mage/t0 as @s run blabber dialogue start atherion:master/mage/t0
#dialoghi se fai parte di un altra gilda
execute if predicate atherion:is_a/alchemist as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_alchemist
execute if predicate atherion:is_a/archer as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_archer
execute if predicate atherion:is_a/blacksmith as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_blacksmith
execute if predicate atherion:is_a/carpenter as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_carpenter
execute if predicate atherion:is_a/chef as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_chef
execute if predicate atherion:is_a/farmer as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_farmer
execute if predicate atherion:is_a/miner as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_miner
execute if predicate atherion:is_a/shadow as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_shadow
execute if predicate atherion:is_a/warrior as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_warrior